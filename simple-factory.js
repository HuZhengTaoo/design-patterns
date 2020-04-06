function Coder(name,age){
  this.name = name
  this.age = age
  this.career =  'coder'
  this.woker = ['写代码','写系分','修bug']
}

function ProductManager(name, age) {
  this.name = name 
  this.age = age
  this.career = 'product manager'
  this.work = ['订会议室', '写PRD', '催更']
}

function Factory(name,age,career){
  switch(career){
    case 'coder':
      return new Coder(name,age)
      break
    case 'producer manager':
      return new ProductManager(name,age)
      break
    return null
  }
}

function User(name,age,career,work){
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

function Factory1(age,name,career){
  let worker
  switch(career){
    case 'coder':
        work =  ['写代码','写系分', '修Bug'] 
        break
    case 'product manager':
        work = ['订会议室', '写PRD', '催更']
        break
    case 'boss':
        work = ['喝茶', '看报', '见客户']
        break
  }
  return new User(name,age,career,work)
}