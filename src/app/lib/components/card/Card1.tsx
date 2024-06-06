import { FunctionComponent } from 'react';
import { Slider1 } from '../slider';
import Image from 'next/image';
interface Props {
  content: string;
  media: string[] | string;
}
const Card1: FunctionComponent<Props> = ({ content, media }) => {
  console.log(Array.isArray(media));
  return (
    <div className="border border-gray-300 pt-2 rounded-md">
      <section className="w-[300px] mx-auto">
        {Array.isArray(media) ? (
          <Slider1 media={media} />
        ) : (
          <Slider1 media={[media]} />
        )}
      </section>
      {content && (
        <section className="mx-2 px-3 pt-3 text-sm leading-9">
          <div className=" text-xl pb-1 border-b border-solid border-black">
            Content
          </div>
          {content}
        </section>
      )}
    </div>
  );
};
export default Card1;
