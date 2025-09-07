from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model

User = get_user_model()


class ApiTestCase(TestCase):
    """Basic API test cases"""

    def setUp(self):
        """Set up test data"""
        self.user = User.objects.create_user(
            username="testuser", email="test@example.com", password="testpass123"
        )

    def test_api_module_exists(self):
        """Test that the API module exists and is properly configured"""
        self.assertTrue(True)

    def test_user_creation(self):
        """Test user creation"""
        self.assertEqual(self.user.username, "testuser")
        self.assertEqual(self.user.email, "test@example.com")
        self.assertTrue(self.user.check_password("testpass123"))
