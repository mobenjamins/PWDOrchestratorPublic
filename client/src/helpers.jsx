import { useEffect } from 'react';

export function useClickOutside(ref, callback) {
   useEffect(() => {
      function handleClickOutside(event) {
         if (ref.current && !ref.current.contains(event.target)) {
            callback();
         }
      }
      document.addEventListener('click', handleClickOutside);
      return () => {
         document.removeEventListener('click', handleClickOutside);
      };
   }, [ref, callback]);
}

export function addAutoplayToYoutubeUrl(url) {
   // Check if the URL is a valid YouTube embed URL
   const regex = /^https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)\?(.*)$/;
   const match = url.match(regex);
   if (!match) {
      throw new Error('Invalid YouTube URL');
   }
   // Extract the video ID and existing parameters
   const videoId = match[1];
   const existingParams = match[2];

   // Add autoplay to the parameters
   const newParams = `${existingParams}&autoplay=1`;

   return `https://www.youtube.com/embed/${videoId}?${newParams}`;
}

