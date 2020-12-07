async function drawLineChart() {
  // write your code here
  const dataset = await d3.json("data/nyc_weather_data.json");

  const yAccessor = d => d.temperatureMax;
  const dateParser = d3.timeParse("%Y-%m-%d"); // timeParse 함수 : 날짜 텍스트 parsing, 함수 리턴
  const xAccessor = d => dateParser(d.date); // date object 나옴
  
  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40, 
      left: 60,
    },
  }
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

  // div는 가장 많이 쓰이는 태그이기 때문에 생략하더라도 div로 인식하여 동작함
  // div를 기술하지 않고 ID나 클래스 이름을 부여하면 자동으로 div로 렌더링
  // d3-selection을 사용해서 #wrapper div 선택
  // svg를 추가한 후, 아까 구한 width와 height 설정
  const wrapper = d3.select("#wrapper")
      .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)

  // 차트가 그려질 영역(group)을 append
  // 이 영역은 margin만큼 이동
  const bounds = wrapper.append("g")
      .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)
  
  // y축 scale
  // scaleLinear를 통해서 데이터 범위를 화면상의 pixel 범위로 변경
  const yScale = d3.scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0])
  
  // x축 scale
  // 시간 축이므로 scaleTime을 사용
  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])

  // 영하의 온도 강조
  const freezingTemperaturePlacement = yScale(32)
  const freezingTemperatures = bounds.append("rect")
      .attr("x", 0)
      .attr("width", dimensions.boundedWidth)
      .attr("y", freezingTemperaturePlacement)
      .attr("height", dimensions.boundedHeight - freezingTemperaturePlacement)
      .attr("fill", "#e0f3f3")

  // x, y 좌표 바탕으로 라인 생성해주는 함수
  // line()을 활용해 path에 들어갈 데이터 생성
  const lineGenerator = d3.line()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))

  // bounds는 svg
  const line = bounds.append("path")
    .attr("d", lineGenerator(dataset))
    .attr("fill", "none")
    .attr("stroke", "#ed553b")
    .attr("stroke-width", 2)

  // x축, y축 그리기
  const yAxisGenerator = d3.axisLeft().scale(yScale)
  const yAxis = bounds.append("g").call(yAxisGenerator)
  const xAxisGenerator = d3.axisBottom().scale(xScale)
  const xAxis = bounds.append("g").call(xAxisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`)
}

drawLineChart()