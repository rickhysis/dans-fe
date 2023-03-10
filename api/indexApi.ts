const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const login = async (username: string, password: string) => {
    const result = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password
        })
    });
    const response = result.json();
    return response;
}

const listPosition = async (value: any, page: number, size: number) => {
    const token = localStorage.getItem('__AUTHTOKEN__') || '';
    const query = new URLSearchParams({ ...value, page, size});
    const result = await fetch(`${API_URL}/api/recruitment/positions.json?${query}`, {
        headers: { 'Authorization': `Bearer ${token}` },
    });
    const response = result.json();
    return response;
}

const detailPosition = async (value: string) => {
    const token = localStorage.getItem('__AUTHTOKEN__') || '';
    const result = await fetch(`${API_URL}/api/recruitment/positions/${value}`, {
        headers: { 'Authorization': `Bearer ${token}` },
    });
    const response = result.json();
    return response;
}

export {
    login,
    listPosition,
    detailPosition
}