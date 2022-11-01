import { Notif } from 'components/Utils/UtilsStyled';

export function NoContacts() {
    return (
        <Notif>There are no contacts.</Notif>
    );
}

export function Error() {
  return (
    <Notif>Error, something went wrong. Please try again.</Notif>
  );
};