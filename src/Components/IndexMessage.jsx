import { useState, useEffect } from 'react';
import { MdMoreHoriz, MdArrowUpward, MdEdit, MdArrowDropDown } from 'react-icons/md';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [arrowIcon, setArrowIcon] = useState(<MdArrowUpward />);
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzI0NTE2N2U1MzAwMTVmYTY5N2IiLCJpYXQiOjE3MTU1ODU4NjAsImV4cCI6MTcxNjc5NTQ2MH0.cEKb2krnNiZwilYZItlDUMreBrz6t-HFPnjBGJ3WWC0";

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setProfileImage(data.image);
        } else {
          console.error('Error fetching profile image:', response.status);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProfileImage();
  }, [accessToken]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setArrowIcon(isOpen ? <MdArrowUpward style={{marginLeft: '1rem'}} /> : <MdArrowDropDown style={{marginLeft: '1rem'}} />);
  };

  const handleMoreOptionsClick = () => {
    // Logic for "More Options" click
  };

  const handleEditClick = () => {
    // Logic for "Edit" click
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', marginRight: "2rem" }}>
      <div style={{ position: 'absolute', [isOpen ? 'top' : 'bottom']: 0, right: 0 }}>
        <div style={{ width: '300px', display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '4px', padding: '8px', zIndex: 1 }}>
          <div style={{ marginRight: '8px' }}>
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
            )}
          </div>
          <button onClick={toggleDropdown} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', width: '100%' }}>
            Messaggistica
            <MdMoreHoriz
              style={{ marginLeft: '2rem', transition: 'color 0.3s', background: hoveredIcon === 'more' ? '#f4f2ee' : 'transparent', borderRadius: '50%', padding: '5px', fontSize: '24px' }}
              onMouseEnter={() => setHoveredIcon('more')}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={handleMoreOptionsClick}
            />
            <MdEdit
              style={{ marginLeft: '1rem', transition: 'color 0.3s', background: hoveredIcon === 'edit' ? '#f4f2ee' : 'transparent', borderRadius: '50%', padding: '5px', fontSize: '24px' }}
              onMouseEnter={() => setHoveredIcon('edit')}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={handleEditClick}
            />
            {arrowIcon}
          </button>
        </div>
        {isOpen && (
          <div
            style={{
              width: 'calc(100% - 2px)', 
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '4px',
              padding: '8px',
              position: 'absolute',
              [isOpen ? 'top' : 'bottom']: 'calc(100% - 2px)', 
              right: '0',
              zIndex: 0,
            }}
          >
            Dropdown content
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;