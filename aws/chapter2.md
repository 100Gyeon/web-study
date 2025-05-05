# 2. Amazon Web Service 사용 시작

## [01] 계정을 만들고 AWS 이용 시작

AWS 사용자 유형 2가지

- **루트 사용자** : 모든 권한을 가진 사용자
- **IAM 사용자** : 보안을 위해 적절한 권한만 부여

![image](https://github.com/user-attachments/assets/1dea5791-e0a9-414e-9c5c-9079867c6e44)

로그인하면 **콘솔 홈** 화면을 볼 수 있는데, 여기서 AWS의 각종 서비스를 이용할 수 있다.

## [02] AWS 서비스를 사용하는 세 가지 방법

### (1) 웹 브라우저에서 AWS 조작

https://aws.amazon.com/ko/getting-started/hands-on/getting-started-with-aws-management-console

가장 일반적이고 직관적인 방법은 웹 브라우저에서 관리 콘솔을 사용하는 것

### (2) 명령줄 도구로 AWS 조작

AWS Command Line Interface(AWS CLI)를 설치해야 한다.  
웹 브라우저 UI나 메뉴 이름 변경에 따른 혼란 없이 AWS CLI 명령어로 일관된 조작 가능

### (3) 프로그램 방식으로 AWS 조작

https://github.com/aws/aws-sdk-js-v3

프로그래밍 방식으로 AWS를 사용하기 위해서는 각 개발 언어에 AWS SDK를 설치해야 한다.  
SDK는 AWS 자원을 조작하는 것은 물론, 응용 프로그램의 일부로 AWS 자원을 조합하거나 S3에 파일을 저장하는 등 다양한 기능을 제공한다.

## [03] AWS 서비스 이용료 시각화

### AWS 비용 관리

어떤 서비스든 **종량 과금제**로 비용이 청구된다.  
즉, 이용한 만큼 매월 이용료가 청구된다.

### AWS Billing and Cost Management란

[Using the AWS Billing and Cost Management home page](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/view-billing-dashboard.html#manage-billing-costmanagement-widgets)

청구 및 비용 관리를 위한 기능을 제공하며, 이를 통해 서비스 이용 및 비용 정보를 시각화할 수 있다.

#### 결제(Billing)

- 청구서 : 각 달의 계정 전체의 청구
- Cost & usage reports : AWS 서비스별 이용량을 보고서로 작성 가능

#### Cost Management

- Cost explorer : 각 서비스의 비용 및 자원 사용량을 그래프로 시각화해 분석 및 예측 가능
- Budgets : 설정한 예산별 상황 관리 가능

### 비용 관리 정책

Cost explorer로 서비스별 비용 상황을 파악하고 비용 최적화 실시  
Budgets에서 받은 알림을 통해 예상치 못한 비용 증가 발생 시 바로 대응

## [04] AWS 시스템이 구축되는 위치 선택

### 리전은 세계에 존재하는 지역

전 세계 각 지역에 '리전'이라는 지리적으로 떨어진 영역이 존재함  
각 리전은 AWS의 사설 네트워크로 연결되어 있음

세계 각지에 리전이 존재하면 다음과 같은 장점이 생긴다.

- 통신 지연 감소
- 특정 리전에서 큰 재난이 발생해도 다른 리전에서 시스템 가동 가능

### 가용성 영역은 리전 내의 독립적인 위치

각 리전에 있는 복수의 가용 영역(AZ)은 하나 이상의 데이터 센터로 구성되며 모두 독립적이다.  
각 AZ는 독립적이지만 AZ끼리는 고속의 네트워크로 연결돼 있고 암호화된 통신을 이용한다.

AZ에는 이름과 ID가 있다.  
이름과 ID는 짝꿍이지만, 계정마다 다르게 짝이 지어진다.  
AZ에 장애가 발생하면 ID를 확인하고, 리소스를 생성하는 등 이용할 때는 이름을 활용한다.

- AZ 이름 : 'ap-northeast-2a'
- AZ ID : 'apne2-az1'

일반적으로 리전을 먼저 선택하고, AZ는 서비스 안에서 선택한다.  
AWS는 여러 AZ에 자원을 배치해 시스템 가용성을 높일 수 있으므로, 사용자가 여러 AZ를 지정해 자원을 생성하는 경우가 많다.  
스토리지 서비스인 S3의 경우, 자동으로 3개 이상의 AZ에 데이터가 복사된다.
