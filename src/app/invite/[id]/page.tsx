/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import logo from '../../../assets/logo.svg';
import Ranking from './ranking';
import Stats from './stats';
import InviteLinkInput from './invite-link-input';

interface InvitePageProps {
  params: Promise<{
    id: string;
  }>;
}

const InvitePage = async ({ params }: InvitePageProps) => {
  const { id } = await params;

  const inviteLink = `http://localhost:3333/invites/${id}`;

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl leading-none font-heading font-semibold text-gray-100">
            Inscrição confirmada!
          </h1>

          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-xl text-gray-200 loading-none font-semibold">
              Indique e Ganhe
            </h2>

            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats id={id} />
        </div>
      </div>

      <Ranking />
    </div>
  );
};

export default InvitePage;
