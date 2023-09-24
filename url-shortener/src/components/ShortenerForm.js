import React, { useState } from 'react';
import './ShortenerForm.css';

function ShortenerForm() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Validate the URL format
        if (!isValidURL(longUrl)) {
          setError('Please enter a valid URL.');
          return;
        }

    setShortUrl('https://your-shortened-url.com/abcd123');
    setError('');
        } catch (err) {
         setError('An error occurred. Please try again.');
        }
    };

    const isValidURL = (url) => {
        // Basic URL validation regex (you can use a more robust one)
        const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return pattern.test(url);
      };
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default ShortenerForm;
