// For manipulating menu names

// disaplayed when a user isn't logged in
export const NavItems = [
  {
    title: "Mentor",
    url: "/mentor",
    cName: "nav-links",
  },
  {
    title: "Mentee",
    url: "/mentee-signup",
    cName: "nav-links",
  },
  {
    title: "Organization",
    url: "/admin-signup",
    cName: "nav-links",
  },
];

// displayed when mentor is logged in
export const MentorNavItems = [
  {
    title: "Dashboard",
    url: "/mentor",
    cName: "nav-links",
  },
  {
    title: "Mentees",
    url: "/mentee-list",
    cName: "nav-links",
  },
];

// displayed when mentor is logged in
export const AdminNavItems = [
  {
    title: "Dashboard",
    url: "/mentor",
    cName: "nav-links",
  },
  {
    title: "Mentees",
    url: "/mentee-list",
    cName: "nav-links",
  },
  {
    title: "MenteeForm",
    url: "/iframe-embed",
    cName: "nav-links",
  },
  {
    title: "Mentors",
    url: "/admin-mentor-list",
    cName: "nav-links",
  },
];
