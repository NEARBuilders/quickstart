const text = `# Heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam
## Sub-heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam
### Another deeper heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam

- list item 1
- list item 2
- list item 3
`;

return (
  <div className="text-white">
    <Markdown text={text} />
  </div>
);
