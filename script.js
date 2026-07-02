// ===== DỮ LIỆU TỪ db.json =====
const dbData = {
    documents: [
        {
            id: 1,
            title: "Bài tập Toán cao cấp A1",
            desc: "Tổng hợp bài tập và lời giải chi tiết Toán cao cấp A1 - Đại học Đại Nam",
            subject: "Toán cao cấp",
            year: "2024-2025",
            views: 1243,
            downloads: 370,
            author: "Hoàng Chí Cương",
            createdAt: "2024-09-15"
        },
        {
            id: 2,
            title: "Giáo trình Lập trình C++",
            desc: "Giáo trình đầy đủ từ cơ bản đến nâng cao, kèm ví dụ minh họa và bài tập thực hành",
            subject: "Lập trình C++",
            year: "2024-2025",
            views: 987,
            downloads: 296,
            author: "Hoàng Chí Cương",
            createdAt: "2024-09-20"
        },
        {
            id: 3,
            title: "Hệ quản trị Cơ sở dữ liệu",
            desc: "Tài liệu tổng quan về SQL, MySQL, thiết kế CSDL và các dạng chuẩn hóa",
            subject: "Cơ sở dữ liệu",
            year: "2023-2024",
            views: 765,
            downloads: 230,
            author: "Nguyễn Văn B",
            createdAt: "2024-08-10"
        },
        {
            id: 4,
            title: "Nhập môn Trí tuệ nhân tạo",
            desc: "Giới thiệu các khái niệm cơ bản: Machine Learning, Deep Learning, Neural Networks",
            subject: "Trí tuệ nhân tạo",
            year: "2024-2025",
            views: 1543,
            downloads: 463,
            author: "Hoàng Chí Cương",
            createdAt: "2024-10-01"
        },
        {
            id: 5,
            title: "Mạng máy tính - Cơ bản",
            desc: "Các mô hình OSI, TCP/IP, địa chỉ IP, subnetting và các giao thức mạng",
            subject: "Mạng máy tính",
            year: "2023-2024",
            views: 876,
            downloads: 263,
            author: "Trần Thị C",
            createdAt: "2024-07-25"
        },
        {
            id: 6,
            title: "Kinh tế vi mô - Bài tập",
            desc: "Tuyển tập bài tập về cung cầu, co giãn, chi phí và lợi nhuận có lời giải",
            subject: "Kinh tế vi mô",
            year: "2024-2025",
            views: 654,
            downloads: 196,
            author: "Hoàng Chí Cương",
            createdAt: "2024-09-28"
        },
        {
            id: 7,
            title: "Ngữ pháp Tiếng Anh tổng hợp",
            desc: "Tổng hợp ngữ pháp từ A-Z, kèm bài tập và đáp án chi tiết",
            subject: "Tiếng Anh",
            year: "2024-2025",
            views: 2134,
            downloads: 640,
            author: "Lê Văn D",
            createdAt: "2024-10-05"
        },
        {
            id: 8,
            title: "Vật lý đại cương 1",
            desc: "Cơ học, nhiệt học, điện từ học - Công thức và bài tập có hướng dẫn",
            subject: "Vật lý đại cương",
            year: "2023-2024",
            views: 543,
            downloads: 163,
            author: "Hoàng Chí Cương",
            createdAt: "2024-08-15"
        },
        {
            id: 9,
            title: "Toán rời rạc - Đồ thị",
            desc: "Lý thuyết đồ thị, cây, đường đi, chu trình và các thuật toán cơ bản",
            subject: "Toán cao cấp",
            year: "2024-2025",
            views: 432,
            downloads: 130,
            author: "Phạm Văn E",
            createdAt: "2024-09-10"
        },
        {
            id: 10,
            title: "Lập trình Python cơ bản",
            desc: "Học Python từ cơ bản: biến, vòng lặp, hàm, OOP và thư viện phổ biến",
            subject: "Lập trình C++",
            year: "2024-2025",
            views: 1098,
            downloads: 329,
            author: "Hoàng Chí Cương",
            createdAt: "2024-10-10"
        }
    ],
    users: [
        {
            id: 1,
            name: "Hoàng Chí Cương",
            email: "hoangchicuong0801@gmail.com",
            phone: "0376558021",
            university: "Đại học Đại Nam",
            avatar: "https://ui-avatars.com/api/?name=Hoang+Chi+Cuong&background=6C63FF&color=fff&size=100"
        }
    ],
    lecturers: [
        { id: 1, name: "PGS.TS Nguyễn Văn A", title: "Trưởng khoa CNTT", department: "Khoa Công nghệ thông tin", expertise: "Trí tuệ nhân tạo, Machine Learning", avatar: "https://ui-avatars.com/api/?name=Nguyen+Van+A&background=2C3E50&color=fff&size=100", email: "nguyenvana@dainam.edu.vn", years: "20 năm kinh nghiệm" },
        { id: 2, name: "TS. Trần Thị B", title: "Phó Trưởng khoa CNTT", department: "Khoa Công nghệ thông tin", expertise: "Cơ sở dữ liệu, Hệ quản trị CSDL", avatar: "https://ui-avatars.com/api/?name=Tran+Thi+B&background=E74C3C&color=fff&size=100", email: "tranthib@dainam.edu.vn", years: "15 năm kinh nghiệm" },
        { id: 3, name: "ThS. Lê Văn C", title: "Giảng viên chính", department: "Khoa Công nghệ thông tin", expertise: "Lập trình C++, C#, .NET", avatar: "https://ui-avatars.com/api/?name=Le+Van+C&background=2980B9&color=fff&size=100", email: "levanc@dainam.edu.vn", years: "12 năm kinh nghiệm" },
        { id: 4, name: "ThS. Phạm Thị D", title: "Giảng viên", department: "Khoa Công nghệ thông tin", expertise: "Mạng máy tính, An ninh mạng", avatar: "https://ui-avatars.com/api/?name=Pham+Thi+D&background=27AE60&color=fff&size=100", email: "phamthid@dainam.edu.vn", years: "10 năm kinh nghiệm" },
        { id: 5, name: "ThS. Hoàng Văn E", title: "Giảng viên", department: "Khoa Công nghệ thông tin", expertise: "Toán rời rạc, Giải tích số", avatar: "https://ui-avatars.com/api/?name=Hoang+Van+E&background=8E44AD&color=fff&size=100", email: "hoangvane@dainam.edu.vn", years: "8 năm kinh nghiệm" },
        { id: 6, name: "TS. Nguyễn Thị F", title: "Giảng viên", department: "Khoa Công nghệ thông tin", expertise: "Trí tuệ nhân tạo, Xử lý ngôn ngữ tự nhiên", avatar: "https://ui-avatars.com/api/?name=Nguyen+Thi+F&background=D35400&color=fff&size=100", email: "nguyenthif@dainam.edu.vn", years: "9 năm kinh nghiệm" },
        { id: 7, name: "ThS. Trịnh Văn G", title: "Giảng viên", department: "Khoa Công nghệ thông tin", expertise: "Phát triển phần mềm, Agile, Scrum", avatar: "https://ui-avatars.com/api/?name=Trinh+Van+G&background=1ABC9C&color=fff&size=100", email: "trinhvang@dainam.edu.vn", years: "7 năm kinh nghiệm" },
        { id: 8, name: "ThS. Bùi Thị H", title: "Giảng viên", department: "Khoa Công nghệ thông tin", expertise: "Thiết kế Web, UI/UX, JavaScript", avatar: "https://ui-avatars.com/api/?name=Bui+Thi+H&background=3498DB&color=fff&size=100", email: "buithih@dainam.edu.vn", years: "6 năm kinh nghiệm" },
        { id: 9, name: "TS. Đặng Văn I", title: "Giảng viên", department: "Khoa Công nghệ thông tin", expertise: "Học máy, Deep Learning, Python", avatar: "https://ui-avatars.com/api/?name=Dang+Van+I&background=E67E22&color=fff&size=100", email: "dangvani@dainam.edu.vn", years: "11 năm kinh nghiệm" },
        { id: 10, name: "ThS. Vũ Thị K", title: "Giảng viên", department: "Khoa Công nghệ thông tin", expertise: "Cơ sở dữ liệu, NoSQL, Big Data", avatar: "https://ui-avatars.com/api/?name=Vu+Thi+K&background=9B59B6&color=fff&size=100", email: "vuthik@dainam.edu.vn", years: "8 năm kinh nghiệm" }
    ]
};

// ===== STATE =====
let allDocs = [...dbData.documents];
let currentUser = dbData.users[0];
let currentDocs = [...allDocs];
let visibleCount = 6;
let currentView = 'grid';
let currentPage = 'home';
let currentFilter = { subject: '', year: '', search: '', sort: 'newest' };

// Rating data
const ratingData = {};
allDocs.forEach(doc => {
    ratingData[doc.id] = {
        average: (3 + Math.random() * 2).toFixed(1),
        count: Math.floor(10 + Math.random() * 50)
    };
});

// ===== DOM REFS =====
const docGrid = document.getElementById('docGrid');
const docCount = document.getElementById('docCount');
const myDocGrid = document.getElementById('myDocGrid');
const myDocCount = document.getElementById('myDocCount');
const searchInput = document.getElementById('searchInput');
const subjectFilter = document.getElementById('subjectFilter');
const yearFilter = document.getElementById('yearFilter');
const sortFilter = document.getElementById('sortFilter');
const resetFilter = document.getElementById('resetFilter');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const viewBtns = document.querySelectorAll('.view-toggle button');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const header = document.getElementById('header');
const progressBar = document.getElementById('progressBar');
const toastContainer = document.getElementById('toastContainer');
const filterBar = document.getElementById('filterBar');

// ===== TOAST SYSTEM =====
function showToast(type, title, message, duration = 3000) {
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '📢'}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">✕</button>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.classList.add('hide'); setTimeout(() => toast.remove(), 500); }, duration);
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 500);
    });
}

// ===== RATING STARS =====
function renderStars(docId, average, count) {
    const fullStars = Math.floor(average);
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= fullStars ? 'active' : ''}" data-value="${i}">★</span>`;
    }
    return `<div class="rating-stars" data-doc="${docId}">${stars}<span style="margin-left: 8px; font-size: 13px; color: var(--text-light);">(${count} đánh giá)</span></div>`;
}

// ===== TOGGLE FILTER BAR =====
function toggleFilterBar(show) {
    if (filterBar) {
        filterBar.style.display = show ? 'block' : 'none';
    }
}

// ===== NAVIGATION =====
function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    document.querySelectorAll('.page-content').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.add('active');
    const hero = document.getElementById('heroSection');
    if (hero) hero.style.display = page === 'home' ? 'block' : 'none';
    
    // Ẩn/hiện filter bar - chỉ hiển thị ở trang home
    toggleFilterBar(page === 'home');
    
    if (page === 'home') renderHome();
    else if (page === 'my-docs') renderMyDocs();
    else if (page === 'community') renderCommunity();
    navMenu.classList.remove('open');
}

// ===== RENDER HOME =====
function renderHome() {
    let filtered = allDocs.filter(doc => {
        const matchSearch = doc.title.toLowerCase().includes(currentFilter.search.toLowerCase()) ||
                            doc.desc.toLowerCase().includes(currentFilter.search.toLowerCase());
        const matchSubject = currentFilter.subject === '' || doc.subject === currentFilter.subject;
        const matchYear = currentFilter.year === '' || doc.year === currentFilter.year;
        return matchSearch && matchSubject && matchYear;
    });
    if (currentFilter.sort === 'views') filtered.sort((a, b) => b.views - a.views);
    else if (currentFilter.sort === 'rating') filtered.sort((a, b) => parseFloat(ratingData[b.id]?.average || 0) - parseFloat(ratingData[a.id]?.average || 0));
    else filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    currentDocs = filtered;
    docCount.textContent = `${filtered.length} tài liệu`;
    const visible = filtered.slice(0, visibleCount);
    if (visible.length === 0) {
        docGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;text-align:center;padding:60px 20px;"><i class="fas fa-search" style="font-size:48px;color:var(--text-light);margin-bottom:16px;"></i><h3 style="font-size:22px;color:var(--text-dark);">Không tìm thấy tài liệu</h3><p style="color:var(--text-gray);">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm nhé!</p></div>`;
        loadMoreBtn.style.display = 'none';
        return;
    }
    docGrid.innerHTML = visible.map(doc => {
        const rating = ratingData[doc.id] || { average: 0, count: 0 };
        return `<div class="doc-card">
            <div class="card-badge"><span class="doc-tag"><i class="fas fa-book"></i> ${doc.subject}</span><span class="doc-tag year"><i class="fas fa-calendar-alt"></i> ${doc.year}</span></div>
            <h3 class="doc-title">${doc.title}</h3>
            <p class="doc-desc">${doc.desc}</p>
            ${renderStars(doc.id, parseFloat(rating.average), rating.count)}
            <div class="doc-footer"><div class="doc-meta"><span><i class="fas fa-eye"></i> ${doc.views}</span><span><i class="fas fa-download"></i> ${doc.downloads}</span><span><i class="fas fa-user"></i> ${doc.author}</span></div><button class="btn-download" onclick="downloadDoc(${doc.id})"><i class="fas fa-download"></i> Tải xuống</button></div>
        </div>`;
    }).join('');
    loadMoreBtn.style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';
    if (currentView === 'list') docGrid.classList.add('list-view');
    else docGrid.classList.remove('list-view');
    document.querySelectorAll('.doc-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
    });
}

// ===== RENDER MY DOCS =====
function renderMyDocs() {
    const myDocs = allDocs.filter(doc => doc.author === currentUser.name);
    myDocCount.textContent = `${myDocs.length} tài liệu`;
    if (myDocs.length === 0) {
        myDocGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;text-align:center;padding:60px 20px;"><i class="fas fa-folder-open" style="font-size:48px;color:var(--text-light);margin-bottom:16px;"></i><h3 style="font-size:22px;color:var(--text-dark);">Chưa có tài liệu</h3><p style="color:var(--text-gray);">Bạn chưa đăng tải tài liệu nào. Hãy chia sẻ ngay!</p><button onclick="navigateTo('upload')" style="margin-top:16px;padding:12px 32px;border-radius:var(--radius-full);background:var(--gradient-primary);color:#fff;border:none;font-weight:700;cursor:pointer;"><i class="fas fa-plus-circle"></i> Đăng tải ngay</button></div>`;
        return;
    }
    myDocGrid.innerHTML = myDocs.map(doc => {
        const rating = ratingData[doc.id] || { average: 0, count: 0 };
        return `<div class="doc-card">
            <div class="card-badge"><span class="doc-tag"><i class="fas fa-book"></i> ${doc.subject}</span><span class="doc-tag year"><i class="fas fa-calendar-alt"></i> ${doc.year}</span></div>
            <h3 class="doc-title">${doc.title}</h3>
            <p class="doc-desc">${doc.desc}</p>
            ${renderStars(doc.id, parseFloat(rating.average), rating.count)}
            <div class="doc-footer"><div class="doc-meta"><span><i class="fas fa-eye"></i> ${doc.views}</span><span><i class="fas fa-download"></i> ${doc.downloads}</span></div><div style="display:flex;gap:8px;"><button class="btn-download" onclick="downloadDoc(${doc.id})" style="background:var(--gradient-primary);"><i class="fas fa-download"></i> Tải</button><button onclick="deleteDoc(${doc.id})" style="padding:8px 16px;border-radius:var(--radius-full);background:#FF6584;color:#fff;border:none;font-weight:700;cursor:pointer;"><i class="fas fa-trash"></i></button></div></div>
        </div>`;
    }).join('');
}

// ===== RENDER COMMUNITY =====
function renderCommunity() {
    const totalUsers = dbData.users.length + 12;
    document.getElementById('communityTotalUsers').textContent = totalUsers;
    document.getElementById('communityTotalDocs').textContent = allDocs.length;
    document.getElementById('communityCount').textContent = `${totalUsers} thành viên`;
    const totalRatings = Object.values(ratingData).reduce((sum, r) => sum + r.count, 0);
    document.getElementById('communityTotalRatings').textContent = totalRatings;
    
    // Lecturers
    document.getElementById('lecturersGrid').innerHTML = dbData.lecturers.map(l => `
        <div class="lecturer-card">
            <div class="lecturer-avatar"><img src="${l.avatar}" alt="${l.name}" /><span class="lecturer-status online"></span></div>
            <div class="lecturer-info">
                <h4>${l.name}</h4><span class="lecturer-title">${l.title}</span>
                <span class="lecturer-dept"><i class="fas fa-building"></i> ${l.department}</span>
                <span class="lecturer-expertise"><i class="fas fa-code"></i> ${l.expertise}</span>
                <span class="lecturer-experience"><i class="fas fa-clock"></i> ${l.years}</span>
                <div class="lecturer-actions">
                    <a href="mailto:${l.email}" class="lecturer-email"><i class="fas fa-envelope"></i> Email</a>
                    <button class="lecturer-chat" onclick="showToast('info', 'Chat', 'Đang kết nối với ${l.name}...')"><i class="fas fa-comment"></i> Chat</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Contributors
    const contributorMap = {};
    allDocs.forEach(doc => { if (!contributorMap[doc.author]) contributorMap[doc.author] = { name: doc.author, count: 0 }; contributorMap[doc.author].count++; });
    const contributors = Object.values(contributorMap).sort((a, b) => b.count - a.count).slice(0, 6);
    document.getElementById('contributorsGrid').innerHTML = contributors.map((c, i) => `
        <div class="contributor-card">
            <img src="https://ui-avatars.com/api/?name=${c.name.replace(/ /g, '+')}&background=6C63FF&color=fff&size=80" alt="${c.name}" />
            <div class="name">${c.name}</div><div class="role">🏆 Top ${i + 1}</div>
            <div class="contrib-count">📄 ${c.count} tài liệu</div>
        </div>
    `).join('');
    
    // Activities
    const activities = [
        { user: 'Hoàng Chí Cương', action: 'đã tải lên', detail: 'Giáo trình Lập trình C++', time: '2 giờ trước', avatar: currentUser.avatar },
        { user: 'Nguyễn Văn B', action: 'đã đánh giá', detail: 'Bài tập Toán cao cấp A1', time: '5 giờ trước', avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+B&background=FF6584&color=fff&size=60' },
        { user: 'Trần Thị C', action: 'đã tải xuống', detail: 'Mạng máy tính - Cơ bản', time: '1 ngày trước', avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+C&background=2ECC71&color=fff&size=60' },
        { user: 'Lê Văn D', action: 'đã đăng tải', detail: 'Ngữ pháp Tiếng Anh tổng hợp', time: '2 ngày trước', avatar: 'https://ui-avatars.com/api/?name=Le+Van+D&background=F39C12&color=fff&size=60' },
        { user: 'PGS.TS Nguyễn Văn A', action: 'đã chia sẻ', detail: 'Tài liệu Machine Learning', time: '4 ngày trước', avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=2C3E50&color=fff&size=60' },
    ];
    document.getElementById('activityList').innerHTML = activities.map(a => `
        <div class="activity-item">
            <img src="${a.avatar}" alt="${a.user}" class="avatar" />
            <div class="content"><div class="action"><strong>${a.user}</strong> ${a.action} <span style="color:var(--primary);font-weight:600;">"${a.detail}"</span></div><div class="detail">${a.action} tài liệu</div></div>
            <span class="time">${a.time}</span>
        </div>
    `).join('');
}

// ===== FILTER HANDLERS =====
function updateFilters() {
    currentFilter.search = searchInput.value.trim();
    currentFilter.subject = subjectFilter.value;
    currentFilter.year = yearFilter.value;
    currentFilter.sort = sortFilter.value;
    visibleCount = 6;
    if (currentPage === 'home') renderHome();
}

searchInput.addEventListener('input', updateFilters);
subjectFilter.addEventListener('change', updateFilters);
yearFilter.addEventListener('change', updateFilters);
sortFilter.addEventListener('change', updateFilters);

resetFilter.addEventListener('click', () => {
    searchInput.value = '';
    subjectFilter.value = '';
    yearFilter.value = '';
    sortFilter.value = 'newest';
    currentFilter = { subject: '', year: '', search: '', sort: 'newest' };
    visibleCount = 6;
    if (currentPage === 'home') renderHome();
    showToast('info', 'Đã đặt lại', 'Tất cả bộ lọc đã được đặt lại');
});

// ===== LOAD MORE =====
loadMoreBtn.addEventListener('click', () => { visibleCount += 4; renderHome(); });

// ===== VIEW TOGGLE =====
viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        renderHome();
    });
});

// ===== NAVIGATION EVENTS =====
document.querySelectorAll('.nav-menu a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => { e.preventDefault(); navigateTo(link.dataset.page); });
});

// Footer navigation links
document.querySelectorAll('.footer-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});

document.getElementById('exploreBtn').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('home');
    setTimeout(() => {
        document.querySelector('.filter-bar').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// ===== UPLOAD FORM =====
document.getElementById('uploadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('uploadTitle').value.trim();
    const desc = document.getElementById('uploadDesc').value.trim();
    const subject = document.getElementById('uploadSubject').value;
    const year = document.getElementById('uploadYear').value;
    const file = document.getElementById('uploadFile').files[0];
    if (!title || !desc || !subject || !year || !file) {
        showToast('error', 'Lỗi', 'Vui lòng điền đầy đủ thông tin và chọn file');
        return;
    }
    const newDoc = {
        id: allDocs.length + 1,
        title, desc, subject, year,
        views: 0, downloads: 0,
        author: currentUser.name,
        createdAt: new Date().toISOString().split('T')[0]
    };
    allDocs.push(newDoc);
    ratingData[newDoc.id] = { average: 0, count: 0 };
    showToast('success', 'Đăng tải thành công!', `Tài liệu "${title}" đã được đăng tải`);
    document.getElementById('uploadForm').reset();
    document.getElementById('fileInfo').style.display = 'none';
    navigateTo('home');
});

document.getElementById('uploadFile').addEventListener('change', function() {
    if (this.files.length > 0) {
        const file = this.files[0];
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = `(${(file.size / 1024).toFixed(1)} KB)`;
        document.getElementById('fileInfo').style.display = 'block';
    }
});

// ===== DOWNLOAD & DELETE =====
function downloadDoc(id) {
    const doc = allDocs.find(d => d.id === id);
    if (doc) { doc.downloads++; showToast('success', 'Đã tải xuống!', `"${doc.title}" đang được tải về...`); }
}
function deleteDoc(id) {
    if (confirm('Bạn có chắc muốn xóa tài liệu này?')) {
        allDocs = allDocs.filter(d => d.id !== id);
        delete ratingData[id];
        renderMyDocs();
        showToast('success', 'Đã xóa', 'Tài liệu đã được xóa thành công');
    }
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); searchInput.focus(); }
    if (e.key === 'Escape') {
        const input = document.getElementById('searchInput');
        if (document.activeElement === input) { input.value = ''; input.blur(); updateFilters(); }
    }
});

// ===== SCROLL EVENTS =====
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    header.classList.toggle('scrolled', window.scrollY > 50);
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
});
scrollTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// ===== HAMBURGER =====
hamburger.addEventListener('click', () => { navMenu.classList.toggle('open'); });
document.addEventListener('click', (e) => { if (!header.contains(e.target)) navMenu.classList.remove('open'); });

// ===== ANIMATE STATS =====
function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) { element.textContent = target + suffix; clearInterval(timer); }
        else { element.textContent = Math.floor(current); }
    }, 16);
}

// ===== INIT =====
function init() {
    navigateTo('home');
    setTimeout(() => {
        animateCounter(document.getElementById('statDocs'), allDocs.length, '+');
        animateCounter(document.getElementById('statUsers'), dbData.users.length + 12, '+');
        const totalRatings = Object.values(ratingData).reduce((sum, r) => sum + r.count, 0);
        animateCounter(document.getElementById('statRating'), totalRatings, '+');
    }, 500);
    showToast('info', 'Chào mừng bạn!', '📚 StudyNotes - Nền tảng chia sẻ tài liệu học tập số 1');
    console.log('📚 StudyNotes đã sẵn sàng!');
    console.log(`📄 Tổng số tài liệu: ${allDocs.length}`);
    console.log(`👥 Tổng số thành viên: ${dbData.users.length + 12}`);
    console.log(`👨‍🏫 Số giảng viên Khoa CNTT: ${dbData.lecturers.length}`);
}

window.navigateTo = navigateTo;
window.downloadDoc = downloadDoc;
window.deleteDoc = deleteDoc;

init();