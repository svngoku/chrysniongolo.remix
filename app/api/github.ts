export type Gist = {
    id: string;
    description: string;
    created_at: string;
    updated_at: string;
};

export type Profile = {
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
}

export type Repository = {
    id: string;
    name: string;
    description: string;
    language: string[] | string;
    topics: string[];
    html_url: string;
    stargazers_count: number;
    created_at: string;
    pushed_at: string;
}


export async function getRepositories() : Promise<Repository[]> {
    const response = await fetch('https://api.github.com/users/svngoku/repos');
    const repos : Repository[] = await response.json();
    return repos;
}

export async function getGists() : Promise<Gist[]> {
    const response = await fetch('https://api.github.com/users/svngoku/gists');
    const gists : Gist[] = await response.json();
    return gists;
}