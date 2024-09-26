// Smooth Scrolling for Navigation Links
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
});

// Scroll-triggered Animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            // Optionally add more validation or handling here
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'WordPress', 'C#', 'Python'],
            datasets: [{
                label: 'Skill Level',
                data: [97, 85, 60, 50, 80, 75, 85],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
                ,
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Ensure chart scales with its container
            indexAxis: 'y', // Makes the chart horizontal
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%'; // Add a percentage sign
                        },
                        color: '#333', // Darker text color for x-axis labels
                        font: {
                            size: 14, // Adjust font size
                            weight: 'bold' // Make text bold
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)' // Light grid lines
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#333', // Darker text color for y-axis labels
                        font: {
                            size: 14, // Adjust font size
                            weight: 'bold' // Make text bold
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)' // Light grid lines
                    }
                }
            },
            animation: {
                duration: 1500, // 1.5 seconds
                easing: 'easeInOutBounce'
            }
        }
    });
});
