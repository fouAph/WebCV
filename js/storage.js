import { DEFAULT_DATA } from './defaultData.js';

const STORAGE_KEY = 'webcv_agus_prastiya_v1';

class StorageService {
  constructor() {
    this.cleanLegacyStorage();
    this.data = this.load();
  }

  cleanLegacyStorage() {
    try {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('webcv_agus_prastiya_v') && key !== STORAGE_KEY) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
    } catch (e) {
      // Ignore storage cleanup errors
    }
  }

  load() {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      if (!serialized) {
        this.save(DEFAULT_DATA);
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
      const parsed = JSON.parse(serialized);
      const mergedGames = (DEFAULT_DATA.games || []).map(defGame => {
        const existing = (parsed.games || []).find(g => g.id === defGame.id);
        return existing ? { ...defGame, ...existing, title: defGame.title, thumbnail: defGame.thumbnail, images: defGame.images, contributions: defGame.contributions, role: defGame.role, status: defGame.status, isUnreleased: defGame.isUnreleased, visits: defGame.visits, playUrl: defGame.playUrl, platform: defGame.platform, description: defGame.description, tags: defGame.tags } : defGame;
      });
      return {
        profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}), socials: DEFAULT_DATA.profile.socials },
        games: mergedGames,
        experiences: Array.isArray(parsed.experiences) ? parsed.experiences : DEFAULT_DATA.experiences,
        education: Array.isArray(parsed.education) ? parsed.education : DEFAULT_DATA.education,
        certifications: Array.isArray(parsed.certifications) ? parsed.certifications : DEFAULT_DATA.certifications
      };
    } catch (err) {
      console.error('Failed to parse saved data from localStorage:', err);
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  save(newData) {
    if (newData) {
      this.data = newData;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      window.dispatchEvent(new CustomEvent('webcv:data-updated', { detail: this.data }));
      return true;
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
      return false;
    }
  }

  getAll() {
    return this.data;
  }

  resetToDefault() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.save();
    return this.data;
  }

  updateProfile(profileData) {
    this.data.profile = { ...this.data.profile, ...profileData };
    this.save();
    return this.data.profile;
  }

  // Games & Projects CRUD ("What I'm Working On")
  saveGame(gameItem) {
    if (!gameItem.id) {
      gameItem.id = 'game-' + Date.now();
      this.data.games.unshift(gameItem);
    } else {
      const idx = this.data.games.findIndex(g => g.id === gameItem.id);
      if (idx !== -1) {
        this.data.games[idx] = gameItem;
      } else {
        this.data.games.unshift(gameItem);
      }
    }
    this.save();
    return gameItem;
  }

  deleteGame(id) {
    this.data.games = this.data.games.filter(g => g.id !== id);
    this.save();
  }

  // Experience CRUD
  saveExperience(expItem) {
    if (!expItem.id) {
      expItem.id = 'exp-' + Date.now();
      this.data.experiences.unshift(expItem);
    } else {
      const idx = this.data.experiences.findIndex(e => e.id === expItem.id);
      if (idx !== -1) {
        this.data.experiences[idx] = expItem;
      } else {
        this.data.experiences.unshift(expItem);
      }
    }
    this.save();
    return expItem;
  }

  deleteExperience(id) {
    this.data.experiences = this.data.experiences.filter(e => e.id !== id);
    this.save();
  }

  exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 2));
    const downloadAnchor = document.createElement('a');
    const filename = `agus-prastiya-portfolio-backup.json`;
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  async importJSON(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (!parsed || typeof parsed !== 'object') throw new Error('Invalid format');
          this.data = {
            profile: parsed.profile || DEFAULT_DATA.profile,
            games: Array.isArray(parsed.games) ? parsed.games : DEFAULT_DATA.games,
            experiences: Array.isArray(parsed.experiences) ? parsed.experiences : DEFAULT_DATA.experiences,
            education: Array.isArray(parsed.education) ? parsed.education : DEFAULT_DATA.education,
            certifications: Array.isArray(parsed.certifications) ? parsed.certifications : DEFAULT_DATA.certifications
          };
          this.save();
          resolve(this.data);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsText(file);
    });
  }
}

export const storage = new StorageService();
