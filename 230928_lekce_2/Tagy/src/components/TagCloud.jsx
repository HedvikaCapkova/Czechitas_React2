import React, { useState, useRef } from 'react';

export const TagCloud = () => {
  const tagArr = [
    'Workout Gear',
    'Digital Art',
    'Replacement',
    'Aria',
    'Fitness',
    'Wireless',
    'iWatch',
    'Hike',
    'Sportsband',
    'Active',
    'Medical',
    'Free',
    'Setup',
    'Goal',
    'Black',
    'Activity',
  ];

  const [tags, setTags] = useState(tagArr);
  const [newTag, setNewTag] = useState('');
  const inputValue = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, newTag]);
    setNewTag('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTags(tags.slice(1));
    console.log(tags.length);
    // const newArr = [...tags];
    // newArr.shift();
    // setTags(newArr);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add new tag..."
          type="text"
          value={newTag}
          ref={inputValue}
          onChange={() => setNewTag(inputValue?.current.value)}
        />
      </form>

      <button
        disabled={tags.length === 0}
        onClick={handleClick}>
        Remove first tag
      </button>

      <div>
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
};
