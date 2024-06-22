import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; // 이벤트 핸들러가 필요한 스토리의 경우
import IconButton from '../components/IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: { control: 'text', description: '이미지의 alt 속성', defaultValue: 'icon' },
    iconPath: { control: 'text', description: '이미지의 경로', defaultValue: '' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: { onClick: fn() }, // 이벤트 핸들러가 필요한 스토리의 경우
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'icon',
    iconPath: '/vite.svg',
  },
};
