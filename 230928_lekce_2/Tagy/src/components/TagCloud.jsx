import React, { useState } from 'react';

export const TagCloud = () => {
  const tagArray = [
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
    'Dolor',
  ];

  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState(tagArray);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, newTag]);
    setNewTag('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New Tag
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
        </label>
      </form>

      <div>
        {tags.map((tag, index) => (
          <div key={index}>{tag}</div>
        ))}
      </div>
    </div>
  );
};
