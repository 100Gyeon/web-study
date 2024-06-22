import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; // 이벤트 핸들러가 필요한 스토리의 경우
import DefaultTextField from '../components/DefaultTextField';

const meta: Meta<typeof DefaultTextField> = {
  title: 'Buttons/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: {
      control: 'text',
      description: '아이콘 이미지의 alt 속성',
      defaultValue: 'icon',
    },
    iconPath: {
      control: 'text',
      description: '아이콘 이미지의 경로',
      defaultValue: '',
    },
    id: {
      control: 'text',
      description: '텍스트 필드의 id',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      description: '텍스트 필드의 placeholder',
      defaultValue: '텍스트를 입력해 주세요.',
    },
    value: {
      control: 'text',
      description: '텍스트 필드의 값',
      defaultValue: '',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부',
      defaultValue: false,
    },
    errorMessage: {
      control: 'text',
      description: '텍스트 필드의 에러 메시지',
      defaultValue: '',
    },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
    onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: { onIconClick: fn() }, // 이벤트 핸들러가 필요한 스토리의 경우
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: 'icon',
    iconPath: 'https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg',
    id: 'email',
    placeholder: '텍스트를 입력해주세요',
    value: '',
    errorMessage: '텍스트를 확인해주세요',
    isError: false,
  },
};
