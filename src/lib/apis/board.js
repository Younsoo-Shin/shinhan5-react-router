const BASE_URL = '/api';

export async function fetchBoardList() {
  try {
    const res = await fetch(`${BASE_URL}/board`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
