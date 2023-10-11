export default function Share ( ) {
    
  const twitterShareUrl = `https://twitter.com`;
  const instagramShareUrl = `https://www.instagram.com`;
  const facebookShareUrl = `https://www.facebook.com`;

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
       <h2 className="h2">Share on: &nbsp; &nbsp; </h2> 
      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-twitter buttonShadow">
        Twitter
      </a>
      <a href={instagramShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-instagram buttonShadow">
       Instagram
      </a>
      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-facebook buttonShadow">
       Facebook
      </a>
    </div>
  );
}

