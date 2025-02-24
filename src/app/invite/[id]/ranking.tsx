import Image from 'next/image';

import { getRanking } from '@/http/api';
import medalGold from '../../../assets/medal-gold.svg';
import medalSilver from '../../../assets/medal-silver.svg';
import medalBronze from '../../../assets/medal-bronze.svg';

export const Ranking = async () => {
  const { ranking } = await getRanking();

  return (
    <div className="space-y-5 w-full max-w-[440px]">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1;

          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-between gap-3"
            >
              <span className="text-sn text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}</span> |{' '}
                {item.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              <Image
                src={medalGold}
                alt="medalha de ouro"
                width={56}
                height={85}
                className="absolute top-0 right-8"
              />

              {rankingPosition === 1 && (
                <Image
                  src={medalGold}
                  alt="medalha de ouro"
                  width={56}
                  height={85}
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  src={medalSilver}
                  alt="medalha de prata"
                  width={56}
                  height={85}
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  src={medalBronze}
                  alt="medalha de bronze"
                  width={56}
                  height={85}
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
