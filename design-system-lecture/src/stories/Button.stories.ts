import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; // 이벤트 핸들러가 필요한 스토리의 경우
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean', description: '버튼의 타입' },
    backgroundColor: { control: 'color', description: '버튼의 배경 컬러' },
  },
  args: { onClick: fn() }, // 이벤트 핸들러가 필요한 스토리의 경우
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
