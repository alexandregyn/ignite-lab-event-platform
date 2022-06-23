import { format, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface ILessonProps {
  title: string;
  slug: string;
  availableat: Date;
  type: 'live' | 'class';
}

export function Lesson(props: ILessonProps) {
  const isLessonAvailable = isPast(props.availableat);
  const availableDateFormatted = format(props.availableat, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300 capitalize">
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
          ): (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20}/>
              Em breve
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO': 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </Link>
  )
}