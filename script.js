// Подключаем твой личный Supabase
const supabaseUrl = 'https://kijosedzdnpjgtrhrvbu.supabase.co';
const supabaseKey = 'Sb_publishable_WnFHswDh1LLnoR61Sl2UXg_Iz6IKQc5';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

async function handleLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Попытка входа
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    // Если пароль неверный или пользователя нет
    alert("Доступ закрыт: " + error.message);
  } else {
    // Если всё успешно — убираем экран логина
    const authSection = document.getElementById('auth-section');
    if (authSection) {
        authSection.style.display = 'none';
    }
    
    // Показываем основной контент, если он был скрыт
    const dashboard = document.getElementById('dashboard');
    if (dashboard) {
        dashboard.style.display = 'block';
    }
    
    console.log("Успешный вход!");
  }
}

