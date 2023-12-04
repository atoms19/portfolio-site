

icons=document.querySelectorAll('.icons-grid a')
cards=document.querySelectorAll('.info-card')
nowActive=icons[0]
nowCard=cards[0]
icons.forEach((x,l)=>{
  x.addEventListener('click',()=>{
    nowActive.classList.remove('active')
    nowCard.classList.add('hidden')
    cards[l].classList.remove('hidden')
    x.classList.add('active')
    cards[l].style.animation='slide 0.7s'
    nowActive=x
    nowCard=cards[l]
  })
})
document.querySelector('#theme-switch').addEventListener('click',(s)=>{
  document.body.classList.toggle('light')
    document.body.classList.toggle('dark')
    s.target.classList.add('active')
    setTimeout(()=>{
      s.target.classList.remove('active')
    },500)
})

document.querySelector('#code-editor').addEventListener('click',()=>{
  alert('work -in progress ')
})

function addProject(obj,id='#projects'){
  parent=document.querySelector(id)
  project=document.createElement('div')
  project.classList.add('project')
  img=document.createElement('div')
  img.classList.add('project-img')
  a=document.createElement('a')
  a.setAttribute('href',obj.link)
  icon=document.createElement('i')
  icon.classList.add('bi')
  if(obj.icon==undefined){
  icon.classList.add('bi-github')
  }else{
    icon.classList.add(obj.icon)
  }
  a.appendChild(icon)
  img.appendChild(a)
  project.appendChild(img)
  prodiv=document.createElement('div')
  h2=document.createElement('h2')
  h2.classList.add('project-name')
  h2.appendChild(document.createTextNode(obj.name))
  prodiv.appendChild(h2)
  p=document.createElement('p')
  p.appendChild(document.createTextNode(obj.intro))
  p.classList.add('project-self')
  prodiv.appendChild(p)
  
  project.appendChild(prodiv)
  
  parent.appendChild(project)
  
}



addProject({
  name:'ilus css',
  link:'https://github.com/atoms19/ILUS.CSS',
  intro:'a component based css framework'
})
 addProject({
   name:'dominity',
   link:'https://github.com/atoms19/dominity.js',
   intro:'a dom-manipulation library'
 })

addProject({
  name:'pop_alert',
  intro:'super easy customisable alerts',
 link:'https://github.com/atoms19/popAlert'
})

addProject({
  name:'ligo css',
  intro:'minimal and basic css framework',
  link:'https://github.com/atoms19/ligo.css'
})
addProject({
  name:'miniscule css',
  intro:'css reset and typography setup',
  link:'https://github.com/atoms19/aw-assets/tree/main/miniscule'
})
addProject({
  name:'gojo tv'
  ,intro:'a website watch anime free of ads',
  link:'https://github.com/atoms19/anilook'
})


//archives

addProject({
  name:'browser homepage',
  icon:'bi-globe2',
  intro:'a functional homepage design browsers',
  link:'https://atoms19.github.io/brogser/home'
},"#archive")

addProject({
  name:'OS ui project',
  icon:'bi-globe2',
  intro:'ui design',
  link:'https://atoms19.github.io/code-sl-backup-/OS%20ui%20project/'
},"#archive")

addProject({
  name:"pdf viewer",
  intro:'ui clone of googles pdf viwer'
  ,icon:'bi-globe2',
  link:'https://atoms19.github.io/code-sl-backup-/pdf%20clone/'
},"#archive")
addProject({
name:'time-piece',
intro:'a functioning timer & stopwatch ',
icon:'bi-globe2',
link:'https://atoms19.github.io/code-sl-backup-/stopwatch'
},'#archive')

addProject({
  name:'aw-flashcards',
  intro:'store flashcards for memorising',
  icon:'bi-globe2',
  link:'https://aw-flashcards.vercel.app'
},'#archive')

addProject({
  name:'Toast js',
  intro:'a js library for toast alerts',
  icon:'bi-globe2'
  ,link:'https://atoms19.github.io/toast'
},'#archive')

//social
addProject({
  name:'github'
  ,link:'https://github.com/atoms19',
  intro:'atoms19'
  
},'#social-c')

addProject({
  name:'codepen',
  link:'https://codepen.io/atoms19',
  icon:'bi-box',
  intro:'atoms19'
},'#social-c')


addProject({
  name:'npm js'
  ,link:'https://www.npmjs.com/~atoms19',icon:'bi-box-fill'
  ,intro:'atoms19'
  
  
},'#social-c')

addProject({
  name:'sololearn',
  link:'https://www.sololearn.com/profile/15464694',
  icon:'bi-house-heart',
  intro:'Atoms~⚛',

},'#social-c')

addProject({
  name:'discord'
  ,link:'',
  intro:'atoms#1341',
  icon:'bi-discord'
  
},'#social')

addProject({
  name:'twitter'
  ,link:'https://twitter.com/vishal_v_devan',
  intro:'vishal_v_devan',
  icon:'bi-twitter'
  
},'#social')

addProject({
  name:'instagram',
  link:'https://www.instagram.com/vishal_v_devan/',
  icon:'bi-instagram',
  intro:'vishal_v_devan'
},"#social")

addProject({
  name:'Email',
  link:'#',
  icon:'bi-envelope-fill',
  intro:'atomicwave19@gamil.com',
  
},"#social")

//career projects

addProject({
  name:'lists ppt',
  intro:'a ppt presentation on lists in python',
  icon:'bi-easel',
  link:'https://www.canva.com/design/DAFTyx0JG0E/it8A4S9k0RtWMlgoGZKuKg/edit?utm_content=DAFTyx0JG0E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
},"#careers")

addProject({
  name:'brogser tech feat ppt',
  intro:'brogser intro',
  icon:'bi-easel',
  link:'https://www.canva.com/design/DAF1-SejFUE/669Zpimf0_vABc07RGbtQw/edit?utm_content=DAF1-SejFUE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebuttonium=link2&utm_source=sharebutton'
},"#careers")

for(i=1;i<4;i++){
  addProject({
    name:'project '+String(i),
    icon:'bi-briefcase'
    ,intro:'empty slot'
    
  },"#careers")
  
}
/*project elem structure 
<div class="project">
              <div class="project-img">
                <a href=""><i class="bi bi-github"></i></a>
              </div>
              <div><h2 class="project-name">ilus css</h2>
              <p class="project-self">
                a css framework sorta like bootstrap 
              </p></div>
              
              </div>*/
