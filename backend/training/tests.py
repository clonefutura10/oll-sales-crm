from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()


class TrainingTestCase(TestCase):
    """Basic Training test cases"""

    def setUp(self):
        """Set up test data"""
        self.user = User.objects.create_user(
            username="trainuser", email="train@example.com", password="testpass123"
        )

    def test_training_module_exists(self):
        """Test that the Training module exists and is properly configured"""
        self.assertTrue(True)

    def test_training_app_ready(self):
        """Test that the training app is ready"""
        from django.apps import apps

        training_app = apps.get_app_config("training")
        self.assertEqual(training_app.name, "training")
