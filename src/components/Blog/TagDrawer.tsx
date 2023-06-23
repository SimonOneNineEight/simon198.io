"use client";

import { ITagListObject } from "@/interfaces";

const TagDrawer: React.FC<{
  tags: ITagListObject[];
  selectTag: (arg0: string) => void;
}> = ({ tags, selectTag }) => {
  return (
    <div
      id="drawer-bottom-example"
      className="right-0 z-40 w-full overflow-y-auto "
      tabIndex={-1}
    >
      <div className="h-[0.1em] bg-neutral-50 dark:bg-neutral-800 mx-4 mt-2 mb-4" />
      <div>
        {tags.map((t) => (
          <button
            className={`bg-neutral-100 dark:bg-neutral-${
              t.isSelected ? 600 : 800
            } h-[28px] px-2 m-1 rounded-md z-[-1]`}
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
};

export default TagDrawer;
