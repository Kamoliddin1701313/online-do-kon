const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// GET request
export async function getData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error("Maʼlumotni olishda xatolik");
    return await res.json();
  } catch (error) {
    console.error("Xatolik:", error.message);
    throw error;
  }
}

// POST request
// export async function postData(endpoint, data) {
//   try {
//     const res = await fetch(`${BASE_URL}/${endpoint}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!res.ok) throw new Error('Maʼlumotni yuborishda xatolik');
//     return await res.json();
//   } catch (error) {
//     console.error('Xatolik:', error.message);
//     throw error;
//   }
// }
