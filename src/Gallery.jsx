function Avatar() {
    return (
      
        <img
          className="avatar"
          src= 'https://preview.redd.it/240512-jennie-ig-update-v0-olo6u2e4uyzc1.jpg?width=1440&format=pjpg&auto=webp&s=26aa50dcb3957b30823979d3eb7769488f44b077'
          alt= "Jennie"
          width ={100}
          height = {100}
        />     
    );
}
  
export default function Profile() {
    return (
      <Avatar 
        person = {{name: "Jennie Kim", imageId: '1bX5QH6' }}
        size = {100}
      />
      
    );
}