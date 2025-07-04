const Tags = ({ tags }: { tags: string[] }) => (
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
        {tags ? tags.map((t: string) => `#${t}`).join(' ') : '​'}
    </p>
);

export default Tags;
