"use client";

import { 
  Button, 
  Card, 
  Text, 
  Heading, 
  Badge, 
  Avatar, 
  Switch, 
  TextField, 
  TextArea, 
  Select, 
  Slider, 
  Checkbox, 
  RadioGroup,
  Dialog,
  AlertDialog,
  Tooltip,
  DropdownMenu,
  Tabs,
  Container,
  Flex,
  Box,
  Grid,
  IconButton,
  Separator,
  Progress,
  Callout
} from "@radix-ui/themes";
import { useState } from "react";
import { 
  MagnifyingGlassIcon, 
  // BellIcon, 
  PersonIcon, 
  GearIcon,
  InfoCircledIcon,
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon
} from "@radix-ui/react-icons";

export default function Home() {
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [checkboxValue, setCheckboxValue] = useState<boolean | "indeterminate">(true);
  const [radioValue, setRadioValue] = useState("1");
  const [progressValue, setProgressValue] = useState(60);

  return (
    <Container size="4" className="py-8">
      <Flex direction="column" gap="6">
        {/* Header */}
        <Box className="text-center">
          <Heading size="8" weight="bold" className="mb-2">
            ☕ Radix UI Demo
          </Heading>
          <Text size="4" color="gray">
            探索 Radix UI 组件库的强大功能
          </Text>
        </Box>

        {/* Typography Section */}
        <Card>
          <Heading size="6" className="mb-4">🎨 Typography</Heading>
          <Flex direction="column" gap="3">
            <Heading size="5">这是一个标题</Heading>
            <Text size="4">这是一段普通文本，展示了基本的文字样式。</Text>
            <Text size="3" color="gray">这是一段灰色的小号文本。</Text>
            <Text weight="bold">这是粗体文本</Text>
          </Flex>
        </Card>

        {/* Buttons Section */}
        <Card>
          <Heading size="6" className="mb-4">🔘 Buttons</Heading>
          <Flex gap="3" wrap="wrap">
            <Button>默认按钮</Button>
            <Button variant="solid" color="blue">蓝色按钮</Button>
            <Button variant="soft" color="green">绿色软按钮</Button>
            <Button variant="outline" color="red">红色边框按钮</Button>
            <Button variant="ghost">幽灵按钮</Button>
            <Button disabled>禁用按钮</Button>
            <IconButton>
              <MagnifyingGlassIcon />
            </IconButton>
          </Flex>
        </Card>

        {/* Form Controls */}
        <Card>
          <Heading size="6" className="mb-4">📝 Form Controls</Heading>
          <Grid columns="2" gap="4">
            <Box>
              <Text as="label" size="3" weight="medium" className="block mb-2">
                文本输入
              </Text>
              <TextField.Root placeholder="请输入您的姓名">
                <TextField.Slot>
                  <PersonIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </Box>

            <Box>
              <Text as="label" size="3" weight="medium" className="block mb-2">
                选择器
              </Text>
              <Select.Root>
                <Select.Trigger placeholder="选择一个选项" />
                <Select.Content>
                  <Select.Item value="coffee">咖啡</Select.Item>
                  <Select.Item value="tea">茶</Select.Item>
                  <Select.Item value="juice">果汁</Select.Item>
                </Select.Content>
              </Select.Root>
            </Box>

            <Box>
              <Text as="label" size="3" weight="medium" className="block mb-2">
                多行文本
              </Text>
              <TextArea placeholder="请输入您的反馈..." />
            </Box>

            <Box>
              <Text as="label" size="3" weight="medium" className="block mb-2">
                滑块控件
              </Text>
              <Slider 
                value={sliderValue} 
                onValueChange={setSliderValue}
                className="mt-2"
              />
              <Text size="2" color="gray">值: {sliderValue[0]}</Text>
            </Box>
          </Grid>

          <Separator className="my-4" />

          <Flex gap="4">
            <Text as="label" size="3">
              <Flex gap="2" align="center">
                <Checkbox 
                  checked={checkboxValue} 
                  onCheckedChange={setCheckboxValue} 
                />
                复选框选项
              </Flex>
            </Text>

            <Text as="label" size="3">
              <Flex gap="2" align="center">
                <Switch 
                  checked={switchValue} 
                  onCheckedChange={setSwitchValue} 
                />
                开关控件
              </Flex>
            </Text>
          </Flex>

          <Box className="mt-4">
            <Text as="div" size="3" weight="medium" className="mb-2">
              单选按钮组
            </Text>
            <RadioGroup.Root value={radioValue} onValueChange={setRadioValue}>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="1" />
                  选项 1
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="2" />
                  选项 2
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="3" />
                  选项 3
                </Flex>
              </Text>
            </RadioGroup.Root>
          </Box>
        </Card>

        {/* Data Display */}
        <Card>
          <Heading size="6" className="mb-4">📊 Data Display</Heading>
          
          <Flex gap="4" align="center" className="mb-4">
            <Avatar fallback="A" />
            <Avatar src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=32&h=32&fit=crop&crop=face" fallback="U" />
            <Badge>新</Badge>
            <Badge color="green">活跃</Badge>
            <Badge variant="soft" color="orange">待处理</Badge>
          </Flex>

          <Box className="mb-4">
            <Text size="3" weight="medium" className="block mb-2">
              进度条
            </Text>
            <Progress value={progressValue} className="mb-2" />
            <Flex gap="2">
              <Button 
                size="1" 
                variant="soft" 
                onClick={() => setProgressValue(Math.max(0, progressValue - 10))}
              >
                -10
              </Button>
              <Button 
                size="1" 
                variant="soft" 
                onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
              >
                +10
              </Button>
            </Flex>
          </Box>
        </Card>

        {/* Interactive Components */}
        <Card>
          <Heading size="6" className="mb-4">🎯 Interactive Components</Heading>
          
          <Tabs.Root defaultValue="tab1">
            <Tabs.List>
              <Tabs.Trigger value="tab1">选项卡 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">选项卡 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">选项卡 3</Tabs.Trigger>
            </Tabs.List>
            
            <Box pt="3">
              <Tabs.Content value="tab1">
                <Text>这是第一个选项卡的内容。</Text>
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <Text>这是第二个选项卡的内容。</Text>
              </Tabs.Content>
              <Tabs.Content value="tab3">
                <Text>这是第三个选项卡的内容。</Text>
              </Tabs.Content>
            </Box>
          </Tabs.Root>

          <Separator className="my-4" />

          <Flex gap="3">
            <Dialog.Root>
              <Dialog.Trigger>
                <Button>打开对话框</Button>
              </Dialog.Trigger>
              <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>对话框标题</Dialog.Title>
                <Dialog.Description size="2" className="mb-4">
                  这是一个示例对话框，展示了如何使用 Radix UI 的 Dialog 组件。
                </Dialog.Description>
                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">取消</Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button>确认</Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="red" variant="soft">删除确认</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>确认删除</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  此操作无法撤销。确定要删除此项目吗？
                </AlertDialog.Description>
                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">取消</Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button variant="solid" color="red">删除</Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>

            <Tooltip content="这是一个工具提示">
              <Button variant="ghost">
                <InfoCircledIcon />
                悬停查看提示
              </Button>
            </Tooltip>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft">
                  菜单 <GearIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>编辑</DropdownMenu.Item>
                <DropdownMenu.Item>复制</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="red">删除</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Card>

        {/* Feedback Components */}
        <Card>
          <Heading size="6" className="mb-4">💬 Feedback</Heading>
          <Flex direction="column" gap="3">
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                这是一个信息提示框，用于显示一般信息。
              </Callout.Text>
            </Callout.Root>

            <Callout.Root color="green">
              <Callout.Icon>
                <CheckCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                操作成功完成！
              </Callout.Text>
            </Callout.Root>

            <Callout.Root color="yellow">
              <Callout.Icon>
                <ExclamationTriangleIcon />
              </Callout.Icon>
              <Callout.Text>
                请注意：这是一个警告信息。
              </Callout.Text>
            </Callout.Root>

            <Callout.Root color="red">
              <Callout.Icon>
                <CrossCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                发生错误：操作失败。
              </Callout.Text>
            </Callout.Root>
          </Flex>
        </Card>

        {/* Footer */}
        <Card>
          <Flex align="center" justify="center" direction="column" gap="2">
            <Text size="2" color="gray">
              这是一个完整的 Radix UI 组件展示页面
            </Text>
            <Text size="1" color="gray">
              访问 <Text as="span" weight="bold">radix-ui.com</Text> 了解更多
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}
