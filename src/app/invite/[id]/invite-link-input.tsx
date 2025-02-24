'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
import IconButton from '@/components/icon-button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { Copy, Link } from 'lucide-react';

interface InviteLinkInputProps {
  inviteLink: string;
}

export const InviteLinkInput = ({ inviteLink }: InviteLinkInputProps) => {
  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField defaultValue={inviteLink} readOnly />

      <InputIcon className="-mr-2">
        <IconButton onClick={copyInviteLink}>
          <Copy className="size-5" />
        </IconButton>
      </InputIcon>
    </InputRoot>
  );
};

export default InviteLinkInput;
