const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// GET request
export async function getData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Next.js server componentlarda keshni olib tashlash uchun
    });

    // if (!res.ok) throw new Error("GET xato bo‘ldi");
    // return await res.json();
  } catch (error) {
    console.error("GET xato:", error);
    throw error;
  }
}

// POST request
export async function postData(endpoint, data) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await res.json(); // ✅ JSON javobni olish

    if (!res.ok) {
      // ✅ backenddan kelgan error xabarni tashlab yuboramiz
      throw new Error(
        responseData?.message || responseData?.error || "POST xato bo‘ldi"
      );
    }

    return responseData; // ✅ muvaffaqiyatli bo‘lsa shu qaytadi
  } catch (error) {
    console.error("POST xato:", error.message);
    throw error; // ❗️ tashqarida ushlash uchun qaytadan tashlaymiz
  }
}
