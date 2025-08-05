import React from 'react';

function FooterContent() {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-12">
        <p className="text-center text-base pt-8">
          Created by{' '}
          <a
            href="https://www.instagram.com/the__skynet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500"
          >
            TheSkynet
          </a>{' '}
          | © {new Date().getFullYear()} Assassins Army - All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default FooterContent;
