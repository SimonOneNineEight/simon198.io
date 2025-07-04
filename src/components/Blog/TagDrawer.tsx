'use client';

import { ITagListObject } from '@/interfaces';

const TagDrawer: React.FC<{
  tags: ITagListObject[];
  selectTag: (arg0: string) => void;
}> = ({ tags, selectTag }) => (
    <div
        id="drawer-bottom-example"
        className="right-0 z-40 w-full overflow-y-auto "
        tabIndex={-1}
    >
        <div className="h-[0.1em] bg-neutral-50 dark:bg-neutral-800 mx-4 mt-2 mb-4" />
        <div>
            {tags.map((t) => (
                <button
                    className={`${t.isSelected ? 'bg-neutral-400' : 'bg-neutral-200'} 
            ${t.isSelected ? 'dark: bg-neutral-600' : 'dark:bg-neutral-800'}
            h-[28px] px-2 m-1 rounded-md z-[-1]`}
                    key={t.label}
                    onClick={() => selectTag(t.label)}
                >
                    {t.label}
                </button>
            ))}
        </div>
        <div className="h-[0.1em] bg-neutral-50 dark:bg-neutral-800 m-4" />
    </div>
);

export default TagDrawer;
