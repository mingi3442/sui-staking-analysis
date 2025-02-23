interface ApiConfig extends RequestInit {
  baseURL?: string;
}

export class ApiClient {
  private baseURL: string;

  constructor(config: ApiConfig = {}) {
    this.baseURL = config.baseURL || `${window.location.origin}/api/`;
  }

  private async request<T>(url: string, config: RequestInit = {}): Promise<T> {
    try {
      const fullUrl = this.baseURL + url;
      const response = await fetch(fullUrl, {
        ...config,
        headers: {
          "Content-Type": "application/json",
          ...config.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async get<T>(url: string, config: RequestInit = {}): Promise<T> {
    return this.request<T>(url, { ...config, method: "GET" });
  }

  async post<T>(url: string, data?: any, config: RequestInit = {}): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put<T>(url: string, data?: any, config: RequestInit = {}): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(url: string, config: RequestInit = {}): Promise<T> {
    return this.request<T>(url, { ...config, method: "DELETE" });
  }
}

export const apiClient = new ApiClient();
