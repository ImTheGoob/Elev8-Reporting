import React, { useState, ChangeEvent, FormEvent } from 'react';

type RequestType = 'bug' | 'feature';

const MyForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [page, setPage] = useState<string>('');
  const [requestType, setRequestType] = useState<RequestType>('bug');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handlePageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(event.target.value);
  };

  const handleRequestTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRequestType(event.target.value as RequestType);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { title, page, requestType };
    console.log(formData);
    // Submit your form data here
  };

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>
            Title:
            <input 
                type="text" 
                value={title} 
                onChange={handleTitleChange} 
            />
            </label>
        </div>
        <div className='form-group'>
            <label>
            What page did the error happen:
            <input 
                type="text" 
                value={page} 
                onChange={handlePageChange} 
            />
            </label>
        </div>
        <div className='form-group'>
            <label>
            <input 
                type="radio" 
                value="bug" 
                checked={requestType === 'bug'} 
                onChange={handleRequestTypeChange} 
            />
            Bug Report
            </label>
            <label>
            <input 
                type="radio" 
                value="feature" 
                checked={requestType === 'feature'} 
                onChange={handleRequestTypeChange} 
            />
            Feature Request
            </label>
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default MyForm;
