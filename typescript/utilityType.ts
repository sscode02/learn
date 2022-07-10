// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Todo {
  title: string;
  description: string;
}

// partial 把类型都变成可选
function  updateTodo(fields: Partial<Todo>){

}

function  updateTodo1(fields: Todo){

}

updateTodo({title:'1'})

updateTodo1({title:'1'}) //


interface Todo1{
  title:string;
  description: string;
}


//required 把类型都变为必选
function updateTodo3(todo:Required<Todo>){}

updateTodo3({title:'1'})


interface Todo3 {
  title:string
}

// readonly 只读
const todo: Readonly<Todo3> = {
  title: 'this is title'
}

todo.title = '1'

// record book 为 key todo4 为values

interface Todo4 {
  title: string;
  desrciption: string;
}

type Book = 'math'|'word'

const book: Record<Book,Todo4> = {
  math:{title:'math',desrciption:'math'},
  word:{title: 'work',desrciption:'word'}
}

// 从IPick中选择一部分类型使用
interface IPick {
  a: string;
  b: string;
  c: string;
}

type TPick = Pick<IPick,'a'|'b'>

const cPick:TPick = {
  a:'a',
  b:'b'
}

// Omit 从IOmit中删除一部分

interface IOmit {
  a:string;
  b:string;
  c:string;
}

type TOmit = Omit<IOmit,'a'>

const cOmit: TOmit = {
  b:'',
  c:''
}

// Exclude<UnionType, ExcludedMembers> 在UnionType排除ExcludedMembers

// Extract<Type, Union> 在type 和 union中取交集

// NonNullable<Type> 排除null 和undefined
type T = NonNullable<string|number|undefined>
