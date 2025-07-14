export class LinkPreviewFetcher {
  constructor(apiKey, httpClient = fetch) {
    this.apiKey = apiKey;
    this.httpClient = httpClient;
    this.apiEndpoint = "https://api.linkpreview.net/";
  }

  buildUrl(targetUrl) {
    const encodedUrl = encodeURIComponent(targetUrl);
    return `${this.apiEndpoint}?key=${this.apiKey}&q=${encodedUrl}`;
  }

  async fetchPreview(targetUrl) {
    const requestUrl = this.buildUrl(targetUrl);
    try {
      const response = await this.httpClient(requestUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      return this.parseResponse(data);
    } catch (err) {
      console.error("LinkPreviewFetcher error:", err);
      throw err;
    }
  }

  parseResponse(data) {
    return {
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      url: data.url || "",
    };
  }
}
