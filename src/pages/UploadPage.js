import React, { Link } from 'react';

export default function UploadPage() {
  return (
  
<div>
<h2>Upload Video</h2>
<h3>VIDEO THUMBNAIL</h3>
<div><img src="../assets/Images/Upload-video-preview.jpg" alt="video thumbnail" /></div>

<form>
  <label name="videoTitle" placeholder='Add a title to your video'> title your video</label>
  <input type="text" name="videoTitle" />
  <label name="videoDescription">Add a description to your video</label>
  <input type="text" name="videoDescription"/>
  <button>PULISH</button>
</form>
<h3>CANCEL</h3>

</div>

  )
  };






