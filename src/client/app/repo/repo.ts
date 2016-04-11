interface User {
  login: string,
  html_url: string,
  avatar_url: string
}

export interface Repository {
  id: number,
  name: string,
  html_url: string,
  open_issues_count: number,
  stargazers_count: number,
  owner: User
}
