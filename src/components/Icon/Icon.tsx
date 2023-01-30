import { FC } from 'react';

type TProps = {
  link: string,
  logo: any,
  alt: string
}

export const Icon: FC<TProps> = (props) => {
  return (
    <li>
      <a href={props.link}><img src={props.logo} alt={props.alt}/></a>
    </li>
  )
};
