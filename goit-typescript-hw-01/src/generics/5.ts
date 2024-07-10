export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}


type RolesDescriptions = Record<UserRole, string>;

const roleDescriptions: RolesDescriptions = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};