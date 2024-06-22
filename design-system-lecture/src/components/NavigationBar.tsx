import IconButton from './IconButton';

interface NavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: NavigationBarProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="flex navigation-title-wrapper">
        {/* 뒤로 가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${isDark ? '-white' : ''}.svg`}
            onClick={onBackButtonClick}
          />
        )}
        {/* 페이지 이름 */}
        {showTitle && <h1 className="text-2xl">{title}</h1>}
      </div>

      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="close"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${isDark ? '-white' : ''}.svg`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
