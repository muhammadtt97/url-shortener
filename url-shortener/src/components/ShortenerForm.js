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
      
      // Send a request to your backend to generate a short URL.
      // For now, simulate this with a dummy short URL.
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

  const handleCopyToClipboard = () => {
    // Implement copy-to-clipboard functionality here
    // You can use the Clipboard API or a library like "clipboard.js"
  };

  return (
    <div className="form-container">
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
      {error && <div className="error">{error}</div>}
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <div className="shortened-url">
            <span>{shortUrl}</span>
            <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShortenerForm;
