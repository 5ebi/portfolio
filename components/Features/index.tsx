import Fade from 'react-reveal/Slide';
import { attributes } from '../../content/main';

type Props = {
  data: (typeof attributes)['features'];
};

export default function Features({ data }: Props) {
  return (
    <div
      id="features"
      className="w-screen bg-gray-100 text-gray-800 text-center grid md:grid-cols-3 p-16 sm:px-32 md:px-16 lg:p-32 gap-12"
    >
      <Fade right>
        {data.map((feature) => (
          <div key={`feature-${feature.title}`}>
            <i className={`mdi mdi-${feature.icon} text-4xl text-grey-600`} />
            <h3 className="text-xl font-bold py-3">{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </Fade>
    </div>
  );
}
