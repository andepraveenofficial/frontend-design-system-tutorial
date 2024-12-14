import { Button, Item, List } from "./library/components";
import { Input } from "./library/form";
import { Stack } from "./library/stack";
import { Heading, Paragraph } from "./library/typography";

const App = () => {
	return (
		<div className="space-x-2 space-y-4">
			<div className="space-x-2 space-y-4">
				<h1>Buttons</h1>
				<Button onClick={() => {}}>
  Default
</Button>
<Button
  onClick={() => {}}
  variant="primary"
>
  Primary
</Button>
<Button
  onClick={() => {}}
  variant="secondary"
>
  Secondary
</Button>
<Button
  onClick={() => {}}
  variant="danger"
>
  Danger
</Button>
<Button
  disabled
  onClick={() => {}}
>
  Disabled
</Button>
<Button
  onClick={() => {}}
  size="sm"
>
  Small
</Button>
<Button
  onClick={() => {}}
  size="md"
>
  Medium
</Button>
<Button
  onClick={() => {}}
  size="lg"
>
  Large
</Button>
<Button
  fullWidth
  onClick={() => {}}
>
  Full width
</Button>
<Button
  className="italic underline hover:text-red-800 hover:bg-yellow-300"
  onClick={() => {}}
>
  Button
</Button>
			</div>
			<hr />

			<div className="space-x-2 space-y-6">
				<h1>Lists</h1>
				<List>
  <Item>
    First item
  </Item>
  <Item>
    Second item
  </Item>
  <Item>
    Third item
  </Item>
  <Item>
    Fourth item
  </Item>
</List>

<List variant="unordered">
  <Item>
    First item
  </Item>
  <Item>
    Second item
  </Item>
  <Item>
    Third item
  </Item>
  <Item>
    Fourth item
  </Item>
</List>

<List variant="ordered">
  <Item>
    First item
  </Item>
  <Item>
    Second item
  </Item>
  <Item>
    Third item
  </Item>
  <Item>
    Fourth item
  </Item>
</List>

<List size="sm">
  <Item>
    First item
  </Item>
  <Item>
    Second item
  </Item>
  <Item>
    Third item
  </Item>
  <Item>
    Fourth item
  </Item>
</List>

<List size="md">
  <Item>
    First item
  </Item>
  <Item>
    Second item
  </Item>
  <Item>
    Third item
  </Item>
  <Item>
    Fourth item
  </Item>
</List>

<List size="lg">
  <Item>
    First item
  </Item>
  <Item>
    Second item
  </Item>
  <Item>
    Third item
  </Item>
  <Item>
    Fourth item
  </Item>
</List>

<List className="text-blue-600 font-medium">
  <Item>
    First item
  </Item>
  <Item>
    Second item
  </Item>
  <Item>
    Third item
  </Item>
  <Item>
    Fourth item
  </Item>
</List>
			</div>
<hr />
			<div>
				<h1>Headings</h1>

				<Heading>
  Default 
</Heading>
<Heading variant="h1">
  Heading 1
</Heading>

<Heading variant="h2">
  Heading 2
</Heading>

<Heading variant="h3">
  Heading 3
</Heading>

<Heading variant="h4">
  Heading 4
</Heading>

<Heading variant="h5">
  Heading 5
</Heading>

<Heading variant="h6">
  Heading 6
</Heading>

<Heading color="primary">
  Primary
</Heading>

<Heading color="secondary">
  Secondary
</Heading>

<Heading color="danger">
  Danger
</Heading>

<Heading align="left">
  Left Heading
</Heading>

<Heading align="center">
  Center Heading
</Heading>

<Heading align="right">
  Right Heading
</Heading>

<Heading className="italic underline decoration-2 underline-offset-4 hover:text-blue-800">
  Custom styled heading
</Heading>
			</div>

			<hr />
			<div className="space-x-2 space-y-4">
				<h1>Paragraphs</h1>
			<Paragraph>
  Default paragraph with standard styling.
</Paragraph>
<Paragraph size="sm">
  This is a small paragraph.
</Paragraph>
<Paragraph size="base">
  This is a base-sized paragraph.
</Paragraph>
<Paragraph size="lg">
  This is a large paragraph.
</Paragraph>
<Paragraph color="primary">
  This is a primary-colored paragraph.
</Paragraph>
<Paragraph color="secondary">
  This is a secondary-colored paragraph.
</Paragraph>
<Paragraph color="danger">
  This is a danger-colored paragraph.
</Paragraph>
<Paragraph weight="normal">
  This is a normal weight paragraph.
</Paragraph>
<Paragraph weight="medium">
  This is a medium weight paragraph.
</Paragraph>
<Paragraph weight="semibold">
  This is a semibold weight paragraph.
</Paragraph>
<Paragraph align="left">
  This is a left-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
</Paragraph>
<Paragraph align="center">
  This is a center-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
</Paragraph>
<Paragraph align="right">
  This is a right-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
</Paragraph>
<Paragraph align="justify">
  This is a justify-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Paragraph>
			</div>

			<hr />

			<div className="space-x-2 space-y-8">
	<h1>Stacks</h1>
	<Stack>
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
</Stack>
<Stack orientation="horizontal">
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
</Stack>

<Stack orientation="vertical">
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
</Stack>

<Stack
  className="bg-gray-100 p-4 rounded-lg"
  orientation="horizontal"
>
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
  <div
    style={{
      backgroundColor: 'red',
      height: 100,
      width: 100
    }}
   />
</Stack>
</div>
			
			<hr />
			<div className="space-x-2 space-y-4">
				<h1>Forms</h1>
				<Input
  onChange={() => {}}
  placeholder="Enter text..."
/>
<Input
  onChange={() => {}}
  placeholder="Enter text..."
  type="text"
/>
<Input
  onChange={() => {}}
  placeholder="Enter email address..."
  type="email"
/>
<Input
  onChange={() => {}}
  placeholder="Enter password..."
  type="password"
/>
<Input
  onChange={() => {}}
  placeholder="Small input"
  size="sm"
/>
<Input
  onChange={() => {}}
  placeholder="Medium input"
  size="md"
/>
<Input
  onChange={() => {}}
  placeholder="Large input"
  size="lg"
/>
<Input
  disabled
  onChange={() => {}}
  placeholder="Disabled input"
/>
<Input
  onChange={() => {}}
  placeholder="Required field"
  required
/>
<Input
  fullWidth
  onChange={() => {}}
  placeholder="Full width input"
/>
<Input
  className="italic placeholder:text-blue-400 focus:ring-4"
  onChange={() => {}}
  placeholder="Custom styled input"
/>

			</div>

			<hr />

			
			<hr />
		</div>
	);
};

export default App;
