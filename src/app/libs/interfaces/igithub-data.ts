export interface IGithubApi {
    items: IGithubIssue[];
    total_count: number;
}

export interface IGithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}