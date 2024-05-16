export function getRawGitHubContent(repo: string, path: string, branch: string = 'v2.0'): string {
	const url = `https://raw.githubusercontent.com/${repo}/${branch}/${path}`;
	return url;
}

export function getGitHubFilesInFolder(
	repo: string,
	path: string,
	branch: string = 'v2.0',
	githubUser: string = 'KGQA'
): string {
	const url = `https://api.github.com/repos/${githubUser}/${repo}/contents/${path}?ref=${branch}`;

	return url;

	/*
	 */
}
