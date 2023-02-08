//import { Habit } from "./components/habits";
import { Header } from './components/Header';
import './styles/global.css';

export function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        
      <Header/>

      </div>

    </div>

  )
}


//fundamento do react
//componente= tudo que a gente quer reaproveitar/isolar
//propriedad= informação enviada para modificar um componente visualmente ou comportamentalmente