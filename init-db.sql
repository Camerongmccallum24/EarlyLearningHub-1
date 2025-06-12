-- Database initialization script for GRO Early Learning Career Website
-- This script sets up the initial database schema and sample data

-- Create database extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables based on the schema
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    job_id VARCHAR(255),
    slug VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    salary VARCHAR(255) NOT NULL,
    overview TEXT,
    description TEXT NOT NULL,
    requirements TEXT[] NOT NULL,
    responsibilities TEXT[],
    benefits TEXT[],
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_applications (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    experience VARCHAR(255) NOT NULL,
    education VARCHAR(255) NOT NULL,
    availability VARCHAR(255) NOT NULL,
    resume_url VARCHAR(255),
    cover_letter TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample job data for GRO Early Learning
INSERT INTO jobs (job_id, slug, title, location, type, department, salary, overview, description, requirements, responsibilities, benefits, status, posted_at) VALUES
('RC-001', 'early-childhood-educator-mount-isa', 'Early Childhood Educator', 'Mount Isa', 'Full-time', 'Education', '$55,000 - $75,000 + Super', 'Join our passionate team in Mount Isa and make a real difference in children''s early development.', 'We are seeking a qualified Early Childhood Educator to join our Mount Isa center. You will work with children aged 6 weeks to 5 years, creating engaging learning experiences that support their development and prepare them for school.', ARRAY['Certificate III or Diploma in Early Childhood Education and Care', 'Current Working with Children Check (Blue Card)', 'First Aid and CPR certification', 'Passion for working with children'], ARRAY['Plan and implement age-appropriate educational programs', 'Observe and document children''s development', 'Collaborate with families and colleagues', 'Maintain a safe and nurturing environment'], ARRAY['Competitive salary package', 'Professional development opportunities', 'Relocation assistance available', 'Employee benefits and discounts'], 'active', CURRENT_TIMESTAMP - INTERVAL '2 days'),

('RC-002', 'room-leader-moranbah', 'Room Leader - Toddler Program', 'Moranbah', 'Full-time', 'Education', '$60,000 - $80,000 + Super', 'Lead our toddler program in the heart of mining country with excellent career progression opportunities.', 'Regional Childcare Moranbah is seeking an experienced Room Leader for our toddler program. You will lead a team of educators while providing high-quality care and education for children aged 15-24 months.', ARRAY['Diploma of Early Childhood Education and Care', 'Minimum 2 years leadership experience', 'Current Working with Children Check', 'Strong communication and team leadership skills'], ARRAY['Lead and mentor a team of educators', 'Develop and implement curriculum programs', 'Build strong relationships with families', 'Ensure compliance with National Quality Standards'], ARRAY['Leadership development programs', 'Remote area benefits', 'Professional development budget', 'Relocation package available'], 'active', CURRENT_TIMESTAMP - INTERVAL '1 day'),

('RC-003', 'assistant-educator-charters-towers', 'Assistant Educator', 'Charters Towers', 'Part-time', 'Education', '$25 - $30 per hour', 'Perfect opportunity for someone starting their early childhood education career in a supportive regional community.', 'Join our team in historic Charters Towers as an Assistant Educator. This role is perfect for someone passionate about early childhood education and looking to grow their career in a supportive environment.', ARRAY['Certificate III in Early Childhood Education and Care (or currently studying)', 'Working with Children Check', 'Enthusiasm for working with children', 'Reliable and team-oriented'], ARRAY['Support lead educators in daily activities', 'Assist with meal times and rest periods', 'Help maintain a safe learning environment', 'Participate in professional development'], ARRAY['Flexible part-time hours', 'Training and mentorship provided', 'Career progression opportunities', 'Small town community lifestyle'], 'active', CURRENT_TIMESTAMP),

('RC-004', 'educational-leader-mount-isa', 'Educational Leader', 'Mount Isa', 'Full-time', 'Management', '$75,000 - $95,000 + Super', 'Lead educational excellence across our Mount Isa center with this senior leadership opportunity.', 'We are seeking an Educational Leader to drive educational programs and mentor our teaching team. This senior role offers excellent career progression and the opportunity to make a lasting impact on children''s learning outcomes.', ARRAY['Bachelor degree in Early Childhood Education or equivalent', 'Minimum 3 years leadership experience in early childhood', 'Demonstrated knowledge of EYLF and NQS', 'Strong analytical and communication skills'], ARRAY['Develop and oversee educational programs', 'Mentor and support teaching staff', 'Conduct quality assessments and improvements', 'Collaborate with families and community'], ARRAY['Senior leadership salary package', 'Professional development opportunities', 'Relocation assistance', 'Career advancement pathways'], 'active', CURRENT_TIMESTAMP - INTERVAL '3 days'),

('RC-005', 'cook-moranbah', 'Cook/Kitchen Hand', 'Moranbah', 'Full-time', 'Support', '$50,000 - $60,000', 'Join our kitchen team and help provide nutritious meals for our young learners in Moranbah.', 'Regional Childcare Moranbah is seeking a dedicated Cook to prepare healthy, nutritious meals for children and staff. You will work in a modern kitchen facility and be part of our holistic approach to child development.', ARRAY['Food Safety Supervisor certificate', 'Experience in commercial cooking preferred', 'Understanding of children''s nutritional needs', 'Current Working with Children Check'], ARRAY['Prepare daily meals and snacks for children', 'Maintain kitchen hygiene standards', 'Manage food inventory and ordering', 'Accommodate dietary requirements and allergies'], ARRAY['Competitive remuneration', 'Remote area benefits', 'Professional development', 'Team environment'], 'active', CURRENT_TIMESTAMP - INTERVAL '5 days');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_department ON jobs(department);
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at);

-- Set up permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO gro_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO gro_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO gro_dev;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO gro_dev;