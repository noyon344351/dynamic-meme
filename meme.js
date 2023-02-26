const meme = ()=>{
    fetch('https://meme-api.com/gimme/30')
    .then(res => res.json())
    .then(data => displayMeme(data.memes))
     .catch(err => console.log(err))
}
const displayMeme = (memes)=> {
    const memeId = document.getElementById('meme');
 for(const meme of memes){
    console.log(meme.url);
    const div = document.createElement('meme');
    div.innerHTML = `
    <div class="card shadow-lg m-3 rounded" style="">
  <img src="${meme.url}" class="card-img-top w-100" alt="" style="height:250px">
  <div class="card-body">
  </div>
</div>
    `
    memeId.appendChild(div);

 }
 

}
meme();